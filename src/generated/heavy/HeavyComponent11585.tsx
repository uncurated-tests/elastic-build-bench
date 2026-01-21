'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11585<T> = T extends (infer U)[]
  ? DeepReadonlyArray11585<U>
  : T extends object
  ? DeepReadonlyObject11585<T>
  : T;

interface DeepReadonlyArray11585<T> extends ReadonlyArray<DeepReadonly11585<T>> {}

type DeepReadonlyObject11585<T> = {
  readonly [P in keyof T]: DeepReadonly11585<T[P]>;
};

type UnionToIntersection11585<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11585<T> = UnionToIntersection11585<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11585<T extends unknown[], V> = [...T, V];

type TuplifyUnion11585<T, L = LastOf11585<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11585<TuplifyUnion11585<Exclude<T, L>>, L>;

type DeepPartial11585<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11585<T[P]> }
  : T;

type Paths11585<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11585<K, Paths11585<T[K], Prev11585[D]>> : never }[keyof T]
  : never;

type Prev11585 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11585<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11585 {
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

type ConfigPaths11585 = Paths11585<NestedConfig11585>;

interface HeavyProps11585 {
  config: DeepPartial11585<NestedConfig11585>;
  path?: ConfigPaths11585;
}

const HeavyComponent11585 = memo(function HeavyComponent11585({ config }: HeavyProps11585) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11585) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11585 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11585: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11585.displayName = 'HeavyComponent11585';
export default HeavyComponent11585;
