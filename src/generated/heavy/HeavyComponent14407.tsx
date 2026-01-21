'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14407<T> = T extends (infer U)[]
  ? DeepReadonlyArray14407<U>
  : T extends object
  ? DeepReadonlyObject14407<T>
  : T;

interface DeepReadonlyArray14407<T> extends ReadonlyArray<DeepReadonly14407<T>> {}

type DeepReadonlyObject14407<T> = {
  readonly [P in keyof T]: DeepReadonly14407<T[P]>;
};

type UnionToIntersection14407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14407<T> = UnionToIntersection14407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14407<T extends unknown[], V> = [...T, V];

type TuplifyUnion14407<T, L = LastOf14407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14407<TuplifyUnion14407<Exclude<T, L>>, L>;

type DeepPartial14407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14407<T[P]> }
  : T;

type Paths14407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14407<K, Paths14407<T[K], Prev14407[D]>> : never }[keyof T]
  : never;

type Prev14407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14407 {
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

type ConfigPaths14407 = Paths14407<NestedConfig14407>;

interface HeavyProps14407 {
  config: DeepPartial14407<NestedConfig14407>;
  path?: ConfigPaths14407;
}

const HeavyComponent14407 = memo(function HeavyComponent14407({ config }: HeavyProps14407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14407.displayName = 'HeavyComponent14407';
export default HeavyComponent14407;
