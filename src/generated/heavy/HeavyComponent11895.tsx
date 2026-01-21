'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11895<T> = T extends (infer U)[]
  ? DeepReadonlyArray11895<U>
  : T extends object
  ? DeepReadonlyObject11895<T>
  : T;

interface DeepReadonlyArray11895<T> extends ReadonlyArray<DeepReadonly11895<T>> {}

type DeepReadonlyObject11895<T> = {
  readonly [P in keyof T]: DeepReadonly11895<T[P]>;
};

type UnionToIntersection11895<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11895<T> = UnionToIntersection11895<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11895<T extends unknown[], V> = [...T, V];

type TuplifyUnion11895<T, L = LastOf11895<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11895<TuplifyUnion11895<Exclude<T, L>>, L>;

type DeepPartial11895<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11895<T[P]> }
  : T;

type Paths11895<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11895<K, Paths11895<T[K], Prev11895[D]>> : never }[keyof T]
  : never;

type Prev11895 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11895<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11895 {
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

type ConfigPaths11895 = Paths11895<NestedConfig11895>;

interface HeavyProps11895 {
  config: DeepPartial11895<NestedConfig11895>;
  path?: ConfigPaths11895;
}

const HeavyComponent11895 = memo(function HeavyComponent11895({ config }: HeavyProps11895) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11895) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11895 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11895: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11895.displayName = 'HeavyComponent11895';
export default HeavyComponent11895;
