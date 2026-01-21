'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2756<T> = T extends (infer U)[]
  ? DeepReadonlyArray2756<U>
  : T extends object
  ? DeepReadonlyObject2756<T>
  : T;

interface DeepReadonlyArray2756<T> extends ReadonlyArray<DeepReadonly2756<T>> {}

type DeepReadonlyObject2756<T> = {
  readonly [P in keyof T]: DeepReadonly2756<T[P]>;
};

type UnionToIntersection2756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2756<T> = UnionToIntersection2756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2756<T extends unknown[], V> = [...T, V];

type TuplifyUnion2756<T, L = LastOf2756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2756<TuplifyUnion2756<Exclude<T, L>>, L>;

type DeepPartial2756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2756<T[P]> }
  : T;

type Paths2756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2756<K, Paths2756<T[K], Prev2756[D]>> : never }[keyof T]
  : never;

type Prev2756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2756 {
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

type ConfigPaths2756 = Paths2756<NestedConfig2756>;

interface HeavyProps2756 {
  config: DeepPartial2756<NestedConfig2756>;
  path?: ConfigPaths2756;
}

const HeavyComponent2756 = memo(function HeavyComponent2756({ config }: HeavyProps2756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2756.displayName = 'HeavyComponent2756';
export default HeavyComponent2756;
