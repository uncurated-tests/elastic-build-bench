'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14661<T> = T extends (infer U)[]
  ? DeepReadonlyArray14661<U>
  : T extends object
  ? DeepReadonlyObject14661<T>
  : T;

interface DeepReadonlyArray14661<T> extends ReadonlyArray<DeepReadonly14661<T>> {}

type DeepReadonlyObject14661<T> = {
  readonly [P in keyof T]: DeepReadonly14661<T[P]>;
};

type UnionToIntersection14661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14661<T> = UnionToIntersection14661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14661<T extends unknown[], V> = [...T, V];

type TuplifyUnion14661<T, L = LastOf14661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14661<TuplifyUnion14661<Exclude<T, L>>, L>;

type DeepPartial14661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14661<T[P]> }
  : T;

type Paths14661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14661<K, Paths14661<T[K], Prev14661[D]>> : never }[keyof T]
  : never;

type Prev14661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14661 {
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

type ConfigPaths14661 = Paths14661<NestedConfig14661>;

interface HeavyProps14661 {
  config: DeepPartial14661<NestedConfig14661>;
  path?: ConfigPaths14661;
}

const HeavyComponent14661 = memo(function HeavyComponent14661({ config }: HeavyProps14661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14661.displayName = 'HeavyComponent14661';
export default HeavyComponent14661;
