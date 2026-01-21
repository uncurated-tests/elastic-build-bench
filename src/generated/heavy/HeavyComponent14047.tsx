'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14047<T> = T extends (infer U)[]
  ? DeepReadonlyArray14047<U>
  : T extends object
  ? DeepReadonlyObject14047<T>
  : T;

interface DeepReadonlyArray14047<T> extends ReadonlyArray<DeepReadonly14047<T>> {}

type DeepReadonlyObject14047<T> = {
  readonly [P in keyof T]: DeepReadonly14047<T[P]>;
};

type UnionToIntersection14047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14047<T> = UnionToIntersection14047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14047<T extends unknown[], V> = [...T, V];

type TuplifyUnion14047<T, L = LastOf14047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14047<TuplifyUnion14047<Exclude<T, L>>, L>;

type DeepPartial14047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14047<T[P]> }
  : T;

type Paths14047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14047<K, Paths14047<T[K], Prev14047[D]>> : never }[keyof T]
  : never;

type Prev14047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14047 {
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

type ConfigPaths14047 = Paths14047<NestedConfig14047>;

interface HeavyProps14047 {
  config: DeepPartial14047<NestedConfig14047>;
  path?: ConfigPaths14047;
}

const HeavyComponent14047 = memo(function HeavyComponent14047({ config }: HeavyProps14047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14047.displayName = 'HeavyComponent14047';
export default HeavyComponent14047;
