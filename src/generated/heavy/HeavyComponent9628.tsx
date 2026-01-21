'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9628<T> = T extends (infer U)[]
  ? DeepReadonlyArray9628<U>
  : T extends object
  ? DeepReadonlyObject9628<T>
  : T;

interface DeepReadonlyArray9628<T> extends ReadonlyArray<DeepReadonly9628<T>> {}

type DeepReadonlyObject9628<T> = {
  readonly [P in keyof T]: DeepReadonly9628<T[P]>;
};

type UnionToIntersection9628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9628<T> = UnionToIntersection9628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9628<T extends unknown[], V> = [...T, V];

type TuplifyUnion9628<T, L = LastOf9628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9628<TuplifyUnion9628<Exclude<T, L>>, L>;

type DeepPartial9628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9628<T[P]> }
  : T;

type Paths9628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9628<K, Paths9628<T[K], Prev9628[D]>> : never }[keyof T]
  : never;

type Prev9628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9628 {
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

type ConfigPaths9628 = Paths9628<NestedConfig9628>;

interface HeavyProps9628 {
  config: DeepPartial9628<NestedConfig9628>;
  path?: ConfigPaths9628;
}

const HeavyComponent9628 = memo(function HeavyComponent9628({ config }: HeavyProps9628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9628.displayName = 'HeavyComponent9628';
export default HeavyComponent9628;
