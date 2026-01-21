'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14236<T> = T extends (infer U)[]
  ? DeepReadonlyArray14236<U>
  : T extends object
  ? DeepReadonlyObject14236<T>
  : T;

interface DeepReadonlyArray14236<T> extends ReadonlyArray<DeepReadonly14236<T>> {}

type DeepReadonlyObject14236<T> = {
  readonly [P in keyof T]: DeepReadonly14236<T[P]>;
};

type UnionToIntersection14236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14236<T> = UnionToIntersection14236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14236<T extends unknown[], V> = [...T, V];

type TuplifyUnion14236<T, L = LastOf14236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14236<TuplifyUnion14236<Exclude<T, L>>, L>;

type DeepPartial14236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14236<T[P]> }
  : T;

type Paths14236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14236<K, Paths14236<T[K], Prev14236[D]>> : never }[keyof T]
  : never;

type Prev14236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14236 {
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

type ConfigPaths14236 = Paths14236<NestedConfig14236>;

interface HeavyProps14236 {
  config: DeepPartial14236<NestedConfig14236>;
  path?: ConfigPaths14236;
}

const HeavyComponent14236 = memo(function HeavyComponent14236({ config }: HeavyProps14236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14236.displayName = 'HeavyComponent14236';
export default HeavyComponent14236;
