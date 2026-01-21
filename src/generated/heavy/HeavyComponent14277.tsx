'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14277<T> = T extends (infer U)[]
  ? DeepReadonlyArray14277<U>
  : T extends object
  ? DeepReadonlyObject14277<T>
  : T;

interface DeepReadonlyArray14277<T> extends ReadonlyArray<DeepReadonly14277<T>> {}

type DeepReadonlyObject14277<T> = {
  readonly [P in keyof T]: DeepReadonly14277<T[P]>;
};

type UnionToIntersection14277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14277<T> = UnionToIntersection14277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14277<T extends unknown[], V> = [...T, V];

type TuplifyUnion14277<T, L = LastOf14277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14277<TuplifyUnion14277<Exclude<T, L>>, L>;

type DeepPartial14277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14277<T[P]> }
  : T;

type Paths14277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14277<K, Paths14277<T[K], Prev14277[D]>> : never }[keyof T]
  : never;

type Prev14277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14277 {
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

type ConfigPaths14277 = Paths14277<NestedConfig14277>;

interface HeavyProps14277 {
  config: DeepPartial14277<NestedConfig14277>;
  path?: ConfigPaths14277;
}

const HeavyComponent14277 = memo(function HeavyComponent14277({ config }: HeavyProps14277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14277.displayName = 'HeavyComponent14277';
export default HeavyComponent14277;
