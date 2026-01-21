'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14267<T> = T extends (infer U)[]
  ? DeepReadonlyArray14267<U>
  : T extends object
  ? DeepReadonlyObject14267<T>
  : T;

interface DeepReadonlyArray14267<T> extends ReadonlyArray<DeepReadonly14267<T>> {}

type DeepReadonlyObject14267<T> = {
  readonly [P in keyof T]: DeepReadonly14267<T[P]>;
};

type UnionToIntersection14267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14267<T> = UnionToIntersection14267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14267<T extends unknown[], V> = [...T, V];

type TuplifyUnion14267<T, L = LastOf14267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14267<TuplifyUnion14267<Exclude<T, L>>, L>;

type DeepPartial14267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14267<T[P]> }
  : T;

type Paths14267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14267<K, Paths14267<T[K], Prev14267[D]>> : never }[keyof T]
  : never;

type Prev14267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14267 {
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

type ConfigPaths14267 = Paths14267<NestedConfig14267>;

interface HeavyProps14267 {
  config: DeepPartial14267<NestedConfig14267>;
  path?: ConfigPaths14267;
}

const HeavyComponent14267 = memo(function HeavyComponent14267({ config }: HeavyProps14267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14267.displayName = 'HeavyComponent14267';
export default HeavyComponent14267;
