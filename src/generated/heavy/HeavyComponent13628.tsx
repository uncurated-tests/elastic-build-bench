'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13628<T> = T extends (infer U)[]
  ? DeepReadonlyArray13628<U>
  : T extends object
  ? DeepReadonlyObject13628<T>
  : T;

interface DeepReadonlyArray13628<T> extends ReadonlyArray<DeepReadonly13628<T>> {}

type DeepReadonlyObject13628<T> = {
  readonly [P in keyof T]: DeepReadonly13628<T[P]>;
};

type UnionToIntersection13628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13628<T> = UnionToIntersection13628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13628<T extends unknown[], V> = [...T, V];

type TuplifyUnion13628<T, L = LastOf13628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13628<TuplifyUnion13628<Exclude<T, L>>, L>;

type DeepPartial13628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13628<T[P]> }
  : T;

type Paths13628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13628<K, Paths13628<T[K], Prev13628[D]>> : never }[keyof T]
  : never;

type Prev13628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13628 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths13628 = Paths13628<NestedConfig13628>;

interface HeavyProps13628 {
  config: DeepPartial13628<NestedConfig13628>;
  path?: ConfigPaths13628;
}

const HeavyComponent13628 = memo(function HeavyComponent13628({ config }: HeavyProps13628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13628.displayName = 'HeavyComponent13628';
export default HeavyComponent13628;
