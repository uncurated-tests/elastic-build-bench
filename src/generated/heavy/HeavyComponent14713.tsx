'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14713<T> = T extends (infer U)[]
  ? DeepReadonlyArray14713<U>
  : T extends object
  ? DeepReadonlyObject14713<T>
  : T;

interface DeepReadonlyArray14713<T> extends ReadonlyArray<DeepReadonly14713<T>> {}

type DeepReadonlyObject14713<T> = {
  readonly [P in keyof T]: DeepReadonly14713<T[P]>;
};

type UnionToIntersection14713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14713<T> = UnionToIntersection14713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14713<T extends unknown[], V> = [...T, V];

type TuplifyUnion14713<T, L = LastOf14713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14713<TuplifyUnion14713<Exclude<T, L>>, L>;

type DeepPartial14713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14713<T[P]> }
  : T;

type Paths14713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14713<K, Paths14713<T[K], Prev14713[D]>> : never }[keyof T]
  : never;

type Prev14713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14713 {
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

type ConfigPaths14713 = Paths14713<NestedConfig14713>;

interface HeavyProps14713 {
  config: DeepPartial14713<NestedConfig14713>;
  path?: ConfigPaths14713;
}

const HeavyComponent14713 = memo(function HeavyComponent14713({ config }: HeavyProps14713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14713.displayName = 'HeavyComponent14713';
export default HeavyComponent14713;
