'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14150<T> = T extends (infer U)[]
  ? DeepReadonlyArray14150<U>
  : T extends object
  ? DeepReadonlyObject14150<T>
  : T;

interface DeepReadonlyArray14150<T> extends ReadonlyArray<DeepReadonly14150<T>> {}

type DeepReadonlyObject14150<T> = {
  readonly [P in keyof T]: DeepReadonly14150<T[P]>;
};

type UnionToIntersection14150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14150<T> = UnionToIntersection14150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14150<T extends unknown[], V> = [...T, V];

type TuplifyUnion14150<T, L = LastOf14150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14150<TuplifyUnion14150<Exclude<T, L>>, L>;

type DeepPartial14150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14150<T[P]> }
  : T;

type Paths14150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14150<K, Paths14150<T[K], Prev14150[D]>> : never }[keyof T]
  : never;

type Prev14150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14150 {
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

type ConfigPaths14150 = Paths14150<NestedConfig14150>;

interface HeavyProps14150 {
  config: DeepPartial14150<NestedConfig14150>;
  path?: ConfigPaths14150;
}

const HeavyComponent14150 = memo(function HeavyComponent14150({ config }: HeavyProps14150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14150.displayName = 'HeavyComponent14150';
export default HeavyComponent14150;
