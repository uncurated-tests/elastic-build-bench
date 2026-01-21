'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11302<T> = T extends (infer U)[]
  ? DeepReadonlyArray11302<U>
  : T extends object
  ? DeepReadonlyObject11302<T>
  : T;

interface DeepReadonlyArray11302<T> extends ReadonlyArray<DeepReadonly11302<T>> {}

type DeepReadonlyObject11302<T> = {
  readonly [P in keyof T]: DeepReadonly11302<T[P]>;
};

type UnionToIntersection11302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11302<T> = UnionToIntersection11302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11302<T extends unknown[], V> = [...T, V];

type TuplifyUnion11302<T, L = LastOf11302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11302<TuplifyUnion11302<Exclude<T, L>>, L>;

type DeepPartial11302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11302<T[P]> }
  : T;

type Paths11302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11302<K, Paths11302<T[K], Prev11302[D]>> : never }[keyof T]
  : never;

type Prev11302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11302 {
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

type ConfigPaths11302 = Paths11302<NestedConfig11302>;

interface HeavyProps11302 {
  config: DeepPartial11302<NestedConfig11302>;
  path?: ConfigPaths11302;
}

const HeavyComponent11302 = memo(function HeavyComponent11302({ config }: HeavyProps11302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11302.displayName = 'HeavyComponent11302';
export default HeavyComponent11302;
