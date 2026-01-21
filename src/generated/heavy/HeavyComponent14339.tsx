'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14339<T> = T extends (infer U)[]
  ? DeepReadonlyArray14339<U>
  : T extends object
  ? DeepReadonlyObject14339<T>
  : T;

interface DeepReadonlyArray14339<T> extends ReadonlyArray<DeepReadonly14339<T>> {}

type DeepReadonlyObject14339<T> = {
  readonly [P in keyof T]: DeepReadonly14339<T[P]>;
};

type UnionToIntersection14339<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14339<T> = UnionToIntersection14339<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14339<T extends unknown[], V> = [...T, V];

type TuplifyUnion14339<T, L = LastOf14339<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14339<TuplifyUnion14339<Exclude<T, L>>, L>;

type DeepPartial14339<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14339<T[P]> }
  : T;

type Paths14339<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14339<K, Paths14339<T[K], Prev14339[D]>> : never }[keyof T]
  : never;

type Prev14339 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14339<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14339 {
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

type ConfigPaths14339 = Paths14339<NestedConfig14339>;

interface HeavyProps14339 {
  config: DeepPartial14339<NestedConfig14339>;
  path?: ConfigPaths14339;
}

const HeavyComponent14339 = memo(function HeavyComponent14339({ config }: HeavyProps14339) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14339) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14339 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14339: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14339.displayName = 'HeavyComponent14339';
export default HeavyComponent14339;
