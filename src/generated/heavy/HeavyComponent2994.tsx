'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2994<T> = T extends (infer U)[]
  ? DeepReadonlyArray2994<U>
  : T extends object
  ? DeepReadonlyObject2994<T>
  : T;

interface DeepReadonlyArray2994<T> extends ReadonlyArray<DeepReadonly2994<T>> {}

type DeepReadonlyObject2994<T> = {
  readonly [P in keyof T]: DeepReadonly2994<T[P]>;
};

type UnionToIntersection2994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2994<T> = UnionToIntersection2994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2994<T extends unknown[], V> = [...T, V];

type TuplifyUnion2994<T, L = LastOf2994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2994<TuplifyUnion2994<Exclude<T, L>>, L>;

type DeepPartial2994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2994<T[P]> }
  : T;

type Paths2994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2994<K, Paths2994<T[K], Prev2994[D]>> : never }[keyof T]
  : never;

type Prev2994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2994 {
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

type ConfigPaths2994 = Paths2994<NestedConfig2994>;

interface HeavyProps2994 {
  config: DeepPartial2994<NestedConfig2994>;
  path?: ConfigPaths2994;
}

const HeavyComponent2994 = memo(function HeavyComponent2994({ config }: HeavyProps2994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2994.displayName = 'HeavyComponent2994';
export default HeavyComponent2994;
