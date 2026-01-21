'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14791<T> = T extends (infer U)[]
  ? DeepReadonlyArray14791<U>
  : T extends object
  ? DeepReadonlyObject14791<T>
  : T;

interface DeepReadonlyArray14791<T> extends ReadonlyArray<DeepReadonly14791<T>> {}

type DeepReadonlyObject14791<T> = {
  readonly [P in keyof T]: DeepReadonly14791<T[P]>;
};

type UnionToIntersection14791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14791<T> = UnionToIntersection14791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14791<T extends unknown[], V> = [...T, V];

type TuplifyUnion14791<T, L = LastOf14791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14791<TuplifyUnion14791<Exclude<T, L>>, L>;

type DeepPartial14791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14791<T[P]> }
  : T;

type Paths14791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14791<K, Paths14791<T[K], Prev14791[D]>> : never }[keyof T]
  : never;

type Prev14791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14791 {
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

type ConfigPaths14791 = Paths14791<NestedConfig14791>;

interface HeavyProps14791 {
  config: DeepPartial14791<NestedConfig14791>;
  path?: ConfigPaths14791;
}

const HeavyComponent14791 = memo(function HeavyComponent14791({ config }: HeavyProps14791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14791.displayName = 'HeavyComponent14791';
export default HeavyComponent14791;
