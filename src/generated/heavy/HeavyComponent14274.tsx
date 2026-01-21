'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14274<T> = T extends (infer U)[]
  ? DeepReadonlyArray14274<U>
  : T extends object
  ? DeepReadonlyObject14274<T>
  : T;

interface DeepReadonlyArray14274<T> extends ReadonlyArray<DeepReadonly14274<T>> {}

type DeepReadonlyObject14274<T> = {
  readonly [P in keyof T]: DeepReadonly14274<T[P]>;
};

type UnionToIntersection14274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14274<T> = UnionToIntersection14274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14274<T extends unknown[], V> = [...T, V];

type TuplifyUnion14274<T, L = LastOf14274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14274<TuplifyUnion14274<Exclude<T, L>>, L>;

type DeepPartial14274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14274<T[P]> }
  : T;

type Paths14274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14274<K, Paths14274<T[K], Prev14274[D]>> : never }[keyof T]
  : never;

type Prev14274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14274 {
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

type ConfigPaths14274 = Paths14274<NestedConfig14274>;

interface HeavyProps14274 {
  config: DeepPartial14274<NestedConfig14274>;
  path?: ConfigPaths14274;
}

const HeavyComponent14274 = memo(function HeavyComponent14274({ config }: HeavyProps14274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14274.displayName = 'HeavyComponent14274';
export default HeavyComponent14274;
