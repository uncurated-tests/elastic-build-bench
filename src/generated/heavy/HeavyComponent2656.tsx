'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2656<T> = T extends (infer U)[]
  ? DeepReadonlyArray2656<U>
  : T extends object
  ? DeepReadonlyObject2656<T>
  : T;

interface DeepReadonlyArray2656<T> extends ReadonlyArray<DeepReadonly2656<T>> {}

type DeepReadonlyObject2656<T> = {
  readonly [P in keyof T]: DeepReadonly2656<T[P]>;
};

type UnionToIntersection2656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2656<T> = UnionToIntersection2656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2656<T extends unknown[], V> = [...T, V];

type TuplifyUnion2656<T, L = LastOf2656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2656<TuplifyUnion2656<Exclude<T, L>>, L>;

type DeepPartial2656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2656<T[P]> }
  : T;

type Paths2656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2656<K, Paths2656<T[K], Prev2656[D]>> : never }[keyof T]
  : never;

type Prev2656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2656 {
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

type ConfigPaths2656 = Paths2656<NestedConfig2656>;

interface HeavyProps2656 {
  config: DeepPartial2656<NestedConfig2656>;
  path?: ConfigPaths2656;
}

const HeavyComponent2656 = memo(function HeavyComponent2656({ config }: HeavyProps2656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2656.displayName = 'HeavyComponent2656';
export default HeavyComponent2656;
