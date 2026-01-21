'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14032<T> = T extends (infer U)[]
  ? DeepReadonlyArray14032<U>
  : T extends object
  ? DeepReadonlyObject14032<T>
  : T;

interface DeepReadonlyArray14032<T> extends ReadonlyArray<DeepReadonly14032<T>> {}

type DeepReadonlyObject14032<T> = {
  readonly [P in keyof T]: DeepReadonly14032<T[P]>;
};

type UnionToIntersection14032<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14032<T> = UnionToIntersection14032<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14032<T extends unknown[], V> = [...T, V];

type TuplifyUnion14032<T, L = LastOf14032<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14032<TuplifyUnion14032<Exclude<T, L>>, L>;

type DeepPartial14032<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14032<T[P]> }
  : T;

type Paths14032<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14032<K, Paths14032<T[K], Prev14032[D]>> : never }[keyof T]
  : never;

type Prev14032 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14032<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14032 {
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

type ConfigPaths14032 = Paths14032<NestedConfig14032>;

interface HeavyProps14032 {
  config: DeepPartial14032<NestedConfig14032>;
  path?: ConfigPaths14032;
}

const HeavyComponent14032 = memo(function HeavyComponent14032({ config }: HeavyProps14032) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14032) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14032 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14032: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14032.displayName = 'HeavyComponent14032';
export default HeavyComponent14032;
