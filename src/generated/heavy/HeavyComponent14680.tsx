'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14680<T> = T extends (infer U)[]
  ? DeepReadonlyArray14680<U>
  : T extends object
  ? DeepReadonlyObject14680<T>
  : T;

interface DeepReadonlyArray14680<T> extends ReadonlyArray<DeepReadonly14680<T>> {}

type DeepReadonlyObject14680<T> = {
  readonly [P in keyof T]: DeepReadonly14680<T[P]>;
};

type UnionToIntersection14680<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14680<T> = UnionToIntersection14680<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14680<T extends unknown[], V> = [...T, V];

type TuplifyUnion14680<T, L = LastOf14680<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14680<TuplifyUnion14680<Exclude<T, L>>, L>;

type DeepPartial14680<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14680<T[P]> }
  : T;

type Paths14680<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14680<K, Paths14680<T[K], Prev14680[D]>> : never }[keyof T]
  : never;

type Prev14680 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14680<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14680 {
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

type ConfigPaths14680 = Paths14680<NestedConfig14680>;

interface HeavyProps14680 {
  config: DeepPartial14680<NestedConfig14680>;
  path?: ConfigPaths14680;
}

const HeavyComponent14680 = memo(function HeavyComponent14680({ config }: HeavyProps14680) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14680) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14680 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14680: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14680.displayName = 'HeavyComponent14680';
export default HeavyComponent14680;
