'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14930<T> = T extends (infer U)[]
  ? DeepReadonlyArray14930<U>
  : T extends object
  ? DeepReadonlyObject14930<T>
  : T;

interface DeepReadonlyArray14930<T> extends ReadonlyArray<DeepReadonly14930<T>> {}

type DeepReadonlyObject14930<T> = {
  readonly [P in keyof T]: DeepReadonly14930<T[P]>;
};

type UnionToIntersection14930<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14930<T> = UnionToIntersection14930<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14930<T extends unknown[], V> = [...T, V];

type TuplifyUnion14930<T, L = LastOf14930<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14930<TuplifyUnion14930<Exclude<T, L>>, L>;

type DeepPartial14930<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14930<T[P]> }
  : T;

type Paths14930<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14930<K, Paths14930<T[K], Prev14930[D]>> : never }[keyof T]
  : never;

type Prev14930 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14930<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14930 {
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

type ConfigPaths14930 = Paths14930<NestedConfig14930>;

interface HeavyProps14930 {
  config: DeepPartial14930<NestedConfig14930>;
  path?: ConfigPaths14930;
}

const HeavyComponent14930 = memo(function HeavyComponent14930({ config }: HeavyProps14930) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14930) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14930 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14930: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14930.displayName = 'HeavyComponent14930';
export default HeavyComponent14930;
