'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11084<T> = T extends (infer U)[]
  ? DeepReadonlyArray11084<U>
  : T extends object
  ? DeepReadonlyObject11084<T>
  : T;

interface DeepReadonlyArray11084<T> extends ReadonlyArray<DeepReadonly11084<T>> {}

type DeepReadonlyObject11084<T> = {
  readonly [P in keyof T]: DeepReadonly11084<T[P]>;
};

type UnionToIntersection11084<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11084<T> = UnionToIntersection11084<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11084<T extends unknown[], V> = [...T, V];

type TuplifyUnion11084<T, L = LastOf11084<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11084<TuplifyUnion11084<Exclude<T, L>>, L>;

type DeepPartial11084<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11084<T[P]> }
  : T;

type Paths11084<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11084<K, Paths11084<T[K], Prev11084[D]>> : never }[keyof T]
  : never;

type Prev11084 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11084<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11084 {
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

type ConfigPaths11084 = Paths11084<NestedConfig11084>;

interface HeavyProps11084 {
  config: DeepPartial11084<NestedConfig11084>;
  path?: ConfigPaths11084;
}

const HeavyComponent11084 = memo(function HeavyComponent11084({ config }: HeavyProps11084) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11084) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11084 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11084: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11084.displayName = 'HeavyComponent11084';
export default HeavyComponent11084;
