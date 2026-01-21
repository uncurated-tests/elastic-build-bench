'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14046<T> = T extends (infer U)[]
  ? DeepReadonlyArray14046<U>
  : T extends object
  ? DeepReadonlyObject14046<T>
  : T;

interface DeepReadonlyArray14046<T> extends ReadonlyArray<DeepReadonly14046<T>> {}

type DeepReadonlyObject14046<T> = {
  readonly [P in keyof T]: DeepReadonly14046<T[P]>;
};

type UnionToIntersection14046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14046<T> = UnionToIntersection14046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14046<T extends unknown[], V> = [...T, V];

type TuplifyUnion14046<T, L = LastOf14046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14046<TuplifyUnion14046<Exclude<T, L>>, L>;

type DeepPartial14046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14046<T[P]> }
  : T;

type Paths14046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14046<K, Paths14046<T[K], Prev14046[D]>> : never }[keyof T]
  : never;

type Prev14046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14046 {
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

type ConfigPaths14046 = Paths14046<NestedConfig14046>;

interface HeavyProps14046 {
  config: DeepPartial14046<NestedConfig14046>;
  path?: ConfigPaths14046;
}

const HeavyComponent14046 = memo(function HeavyComponent14046({ config }: HeavyProps14046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14046.displayName = 'HeavyComponent14046';
export default HeavyComponent14046;
