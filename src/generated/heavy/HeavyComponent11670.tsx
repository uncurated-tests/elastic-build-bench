'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11670<T> = T extends (infer U)[]
  ? DeepReadonlyArray11670<U>
  : T extends object
  ? DeepReadonlyObject11670<T>
  : T;

interface DeepReadonlyArray11670<T> extends ReadonlyArray<DeepReadonly11670<T>> {}

type DeepReadonlyObject11670<T> = {
  readonly [P in keyof T]: DeepReadonly11670<T[P]>;
};

type UnionToIntersection11670<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11670<T> = UnionToIntersection11670<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11670<T extends unknown[], V> = [...T, V];

type TuplifyUnion11670<T, L = LastOf11670<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11670<TuplifyUnion11670<Exclude<T, L>>, L>;

type DeepPartial11670<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11670<T[P]> }
  : T;

type Paths11670<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11670<K, Paths11670<T[K], Prev11670[D]>> : never }[keyof T]
  : never;

type Prev11670 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11670<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11670 {
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

type ConfigPaths11670 = Paths11670<NestedConfig11670>;

interface HeavyProps11670 {
  config: DeepPartial11670<NestedConfig11670>;
  path?: ConfigPaths11670;
}

const HeavyComponent11670 = memo(function HeavyComponent11670({ config }: HeavyProps11670) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11670) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11670 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11670: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11670.displayName = 'HeavyComponent11670';
export default HeavyComponent11670;
