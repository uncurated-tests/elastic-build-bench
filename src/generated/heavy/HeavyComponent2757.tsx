'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2757<T> = T extends (infer U)[]
  ? DeepReadonlyArray2757<U>
  : T extends object
  ? DeepReadonlyObject2757<T>
  : T;

interface DeepReadonlyArray2757<T> extends ReadonlyArray<DeepReadonly2757<T>> {}

type DeepReadonlyObject2757<T> = {
  readonly [P in keyof T]: DeepReadonly2757<T[P]>;
};

type UnionToIntersection2757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2757<T> = UnionToIntersection2757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2757<T extends unknown[], V> = [...T, V];

type TuplifyUnion2757<T, L = LastOf2757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2757<TuplifyUnion2757<Exclude<T, L>>, L>;

type DeepPartial2757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2757<T[P]> }
  : T;

type Paths2757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2757<K, Paths2757<T[K], Prev2757[D]>> : never }[keyof T]
  : never;

type Prev2757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2757 {
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

type ConfigPaths2757 = Paths2757<NestedConfig2757>;

interface HeavyProps2757 {
  config: DeepPartial2757<NestedConfig2757>;
  path?: ConfigPaths2757;
}

const HeavyComponent2757 = memo(function HeavyComponent2757({ config }: HeavyProps2757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2757.displayName = 'HeavyComponent2757';
export default HeavyComponent2757;
