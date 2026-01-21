'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14818<T> = T extends (infer U)[]
  ? DeepReadonlyArray14818<U>
  : T extends object
  ? DeepReadonlyObject14818<T>
  : T;

interface DeepReadonlyArray14818<T> extends ReadonlyArray<DeepReadonly14818<T>> {}

type DeepReadonlyObject14818<T> = {
  readonly [P in keyof T]: DeepReadonly14818<T[P]>;
};

type UnionToIntersection14818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14818<T> = UnionToIntersection14818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14818<T extends unknown[], V> = [...T, V];

type TuplifyUnion14818<T, L = LastOf14818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14818<TuplifyUnion14818<Exclude<T, L>>, L>;

type DeepPartial14818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14818<T[P]> }
  : T;

type Paths14818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14818<K, Paths14818<T[K], Prev14818[D]>> : never }[keyof T]
  : never;

type Prev14818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14818 {
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

type ConfigPaths14818 = Paths14818<NestedConfig14818>;

interface HeavyProps14818 {
  config: DeepPartial14818<NestedConfig14818>;
  path?: ConfigPaths14818;
}

const HeavyComponent14818 = memo(function HeavyComponent14818({ config }: HeavyProps14818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14818.displayName = 'HeavyComponent14818';
export default HeavyComponent14818;
