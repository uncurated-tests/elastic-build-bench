'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14494<T> = T extends (infer U)[]
  ? DeepReadonlyArray14494<U>
  : T extends object
  ? DeepReadonlyObject14494<T>
  : T;

interface DeepReadonlyArray14494<T> extends ReadonlyArray<DeepReadonly14494<T>> {}

type DeepReadonlyObject14494<T> = {
  readonly [P in keyof T]: DeepReadonly14494<T[P]>;
};

type UnionToIntersection14494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14494<T> = UnionToIntersection14494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14494<T extends unknown[], V> = [...T, V];

type TuplifyUnion14494<T, L = LastOf14494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14494<TuplifyUnion14494<Exclude<T, L>>, L>;

type DeepPartial14494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14494<T[P]> }
  : T;

type Paths14494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14494<K, Paths14494<T[K], Prev14494[D]>> : never }[keyof T]
  : never;

type Prev14494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14494 {
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

type ConfigPaths14494 = Paths14494<NestedConfig14494>;

interface HeavyProps14494 {
  config: DeepPartial14494<NestedConfig14494>;
  path?: ConfigPaths14494;
}

const HeavyComponent14494 = memo(function HeavyComponent14494({ config }: HeavyProps14494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14494.displayName = 'HeavyComponent14494';
export default HeavyComponent14494;
