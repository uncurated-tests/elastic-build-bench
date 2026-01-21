'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14996<T> = T extends (infer U)[]
  ? DeepReadonlyArray14996<U>
  : T extends object
  ? DeepReadonlyObject14996<T>
  : T;

interface DeepReadonlyArray14996<T> extends ReadonlyArray<DeepReadonly14996<T>> {}

type DeepReadonlyObject14996<T> = {
  readonly [P in keyof T]: DeepReadonly14996<T[P]>;
};

type UnionToIntersection14996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14996<T> = UnionToIntersection14996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14996<T extends unknown[], V> = [...T, V];

type TuplifyUnion14996<T, L = LastOf14996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14996<TuplifyUnion14996<Exclude<T, L>>, L>;

type DeepPartial14996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14996<T[P]> }
  : T;

type Paths14996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14996<K, Paths14996<T[K], Prev14996[D]>> : never }[keyof T]
  : never;

type Prev14996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14996 {
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

type ConfigPaths14996 = Paths14996<NestedConfig14996>;

interface HeavyProps14996 {
  config: DeepPartial14996<NestedConfig14996>;
  path?: ConfigPaths14996;
}

const HeavyComponent14996 = memo(function HeavyComponent14996({ config }: HeavyProps14996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14996.displayName = 'HeavyComponent14996';
export default HeavyComponent14996;
