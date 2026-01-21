'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14869<T> = T extends (infer U)[]
  ? DeepReadonlyArray14869<U>
  : T extends object
  ? DeepReadonlyObject14869<T>
  : T;

interface DeepReadonlyArray14869<T> extends ReadonlyArray<DeepReadonly14869<T>> {}

type DeepReadonlyObject14869<T> = {
  readonly [P in keyof T]: DeepReadonly14869<T[P]>;
};

type UnionToIntersection14869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14869<T> = UnionToIntersection14869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14869<T extends unknown[], V> = [...T, V];

type TuplifyUnion14869<T, L = LastOf14869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14869<TuplifyUnion14869<Exclude<T, L>>, L>;

type DeepPartial14869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14869<T[P]> }
  : T;

type Paths14869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14869<K, Paths14869<T[K], Prev14869[D]>> : never }[keyof T]
  : never;

type Prev14869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14869 {
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

type ConfigPaths14869 = Paths14869<NestedConfig14869>;

interface HeavyProps14869 {
  config: DeepPartial14869<NestedConfig14869>;
  path?: ConfigPaths14869;
}

const HeavyComponent14869 = memo(function HeavyComponent14869({ config }: HeavyProps14869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14869.displayName = 'HeavyComponent14869';
export default HeavyComponent14869;
