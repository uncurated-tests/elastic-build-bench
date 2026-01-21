'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11866<T> = T extends (infer U)[]
  ? DeepReadonlyArray11866<U>
  : T extends object
  ? DeepReadonlyObject11866<T>
  : T;

interface DeepReadonlyArray11866<T> extends ReadonlyArray<DeepReadonly11866<T>> {}

type DeepReadonlyObject11866<T> = {
  readonly [P in keyof T]: DeepReadonly11866<T[P]>;
};

type UnionToIntersection11866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11866<T> = UnionToIntersection11866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11866<T extends unknown[], V> = [...T, V];

type TuplifyUnion11866<T, L = LastOf11866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11866<TuplifyUnion11866<Exclude<T, L>>, L>;

type DeepPartial11866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11866<T[P]> }
  : T;

type Paths11866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11866<K, Paths11866<T[K], Prev11866[D]>> : never }[keyof T]
  : never;

type Prev11866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11866 {
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

type ConfigPaths11866 = Paths11866<NestedConfig11866>;

interface HeavyProps11866 {
  config: DeepPartial11866<NestedConfig11866>;
  path?: ConfigPaths11866;
}

const HeavyComponent11866 = memo(function HeavyComponent11866({ config }: HeavyProps11866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11866.displayName = 'HeavyComponent11866';
export default HeavyComponent11866;
