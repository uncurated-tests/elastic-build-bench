'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11588<T> = T extends (infer U)[]
  ? DeepReadonlyArray11588<U>
  : T extends object
  ? DeepReadonlyObject11588<T>
  : T;

interface DeepReadonlyArray11588<T> extends ReadonlyArray<DeepReadonly11588<T>> {}

type DeepReadonlyObject11588<T> = {
  readonly [P in keyof T]: DeepReadonly11588<T[P]>;
};

type UnionToIntersection11588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11588<T> = UnionToIntersection11588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11588<T extends unknown[], V> = [...T, V];

type TuplifyUnion11588<T, L = LastOf11588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11588<TuplifyUnion11588<Exclude<T, L>>, L>;

type DeepPartial11588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11588<T[P]> }
  : T;

type Paths11588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11588<K, Paths11588<T[K], Prev11588[D]>> : never }[keyof T]
  : never;

type Prev11588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11588 {
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

type ConfigPaths11588 = Paths11588<NestedConfig11588>;

interface HeavyProps11588 {
  config: DeepPartial11588<NestedConfig11588>;
  path?: ConfigPaths11588;
}

const HeavyComponent11588 = memo(function HeavyComponent11588({ config }: HeavyProps11588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11588.displayName = 'HeavyComponent11588';
export default HeavyComponent11588;
