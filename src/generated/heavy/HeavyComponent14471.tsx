'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14471<T> = T extends (infer U)[]
  ? DeepReadonlyArray14471<U>
  : T extends object
  ? DeepReadonlyObject14471<T>
  : T;

interface DeepReadonlyArray14471<T> extends ReadonlyArray<DeepReadonly14471<T>> {}

type DeepReadonlyObject14471<T> = {
  readonly [P in keyof T]: DeepReadonly14471<T[P]>;
};

type UnionToIntersection14471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14471<T> = UnionToIntersection14471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14471<T extends unknown[], V> = [...T, V];

type TuplifyUnion14471<T, L = LastOf14471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14471<TuplifyUnion14471<Exclude<T, L>>, L>;

type DeepPartial14471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14471<T[P]> }
  : T;

type Paths14471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14471<K, Paths14471<T[K], Prev14471[D]>> : never }[keyof T]
  : never;

type Prev14471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14471 {
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

type ConfigPaths14471 = Paths14471<NestedConfig14471>;

interface HeavyProps14471 {
  config: DeepPartial14471<NestedConfig14471>;
  path?: ConfigPaths14471;
}

const HeavyComponent14471 = memo(function HeavyComponent14471({ config }: HeavyProps14471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14471.displayName = 'HeavyComponent14471';
export default HeavyComponent14471;
