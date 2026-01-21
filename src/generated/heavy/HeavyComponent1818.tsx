'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1818<T> = T extends (infer U)[]
  ? DeepReadonlyArray1818<U>
  : T extends object
  ? DeepReadonlyObject1818<T>
  : T;

interface DeepReadonlyArray1818<T> extends ReadonlyArray<DeepReadonly1818<T>> {}

type DeepReadonlyObject1818<T> = {
  readonly [P in keyof T]: DeepReadonly1818<T[P]>;
};

type UnionToIntersection1818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1818<T> = UnionToIntersection1818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1818<T extends unknown[], V> = [...T, V];

type TuplifyUnion1818<T, L = LastOf1818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1818<TuplifyUnion1818<Exclude<T, L>>, L>;

type DeepPartial1818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1818<T[P]> }
  : T;

type Paths1818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1818<K, Paths1818<T[K], Prev1818[D]>> : never }[keyof T]
  : never;

type Prev1818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1818 {
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

type ConfigPaths1818 = Paths1818<NestedConfig1818>;

interface HeavyProps1818 {
  config: DeepPartial1818<NestedConfig1818>;
  path?: ConfigPaths1818;
}

const HeavyComponent1818 = memo(function HeavyComponent1818({ config }: HeavyProps1818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1818.displayName = 'HeavyComponent1818';
export default HeavyComponent1818;
