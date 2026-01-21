'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14027<T> = T extends (infer U)[]
  ? DeepReadonlyArray14027<U>
  : T extends object
  ? DeepReadonlyObject14027<T>
  : T;

interface DeepReadonlyArray14027<T> extends ReadonlyArray<DeepReadonly14027<T>> {}

type DeepReadonlyObject14027<T> = {
  readonly [P in keyof T]: DeepReadonly14027<T[P]>;
};

type UnionToIntersection14027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14027<T> = UnionToIntersection14027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14027<T extends unknown[], V> = [...T, V];

type TuplifyUnion14027<T, L = LastOf14027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14027<TuplifyUnion14027<Exclude<T, L>>, L>;

type DeepPartial14027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14027<T[P]> }
  : T;

type Paths14027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14027<K, Paths14027<T[K], Prev14027[D]>> : never }[keyof T]
  : never;

type Prev14027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14027 {
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

type ConfigPaths14027 = Paths14027<NestedConfig14027>;

interface HeavyProps14027 {
  config: DeepPartial14027<NestedConfig14027>;
  path?: ConfigPaths14027;
}

const HeavyComponent14027 = memo(function HeavyComponent14027({ config }: HeavyProps14027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14027.displayName = 'HeavyComponent14027';
export default HeavyComponent14027;
