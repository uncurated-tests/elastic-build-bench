'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2628<T> = T extends (infer U)[]
  ? DeepReadonlyArray2628<U>
  : T extends object
  ? DeepReadonlyObject2628<T>
  : T;

interface DeepReadonlyArray2628<T> extends ReadonlyArray<DeepReadonly2628<T>> {}

type DeepReadonlyObject2628<T> = {
  readonly [P in keyof T]: DeepReadonly2628<T[P]>;
};

type UnionToIntersection2628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2628<T> = UnionToIntersection2628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2628<T extends unknown[], V> = [...T, V];

type TuplifyUnion2628<T, L = LastOf2628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2628<TuplifyUnion2628<Exclude<T, L>>, L>;

type DeepPartial2628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2628<T[P]> }
  : T;

type Paths2628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2628<K, Paths2628<T[K], Prev2628[D]>> : never }[keyof T]
  : never;

type Prev2628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2628 {
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

type ConfigPaths2628 = Paths2628<NestedConfig2628>;

interface HeavyProps2628 {
  config: DeepPartial2628<NestedConfig2628>;
  path?: ConfigPaths2628;
}

const HeavyComponent2628 = memo(function HeavyComponent2628({ config }: HeavyProps2628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2628.displayName = 'HeavyComponent2628';
export default HeavyComponent2628;
