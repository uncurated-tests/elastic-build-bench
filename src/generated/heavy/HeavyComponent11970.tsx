'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11970<T> = T extends (infer U)[]
  ? DeepReadonlyArray11970<U>
  : T extends object
  ? DeepReadonlyObject11970<T>
  : T;

interface DeepReadonlyArray11970<T> extends ReadonlyArray<DeepReadonly11970<T>> {}

type DeepReadonlyObject11970<T> = {
  readonly [P in keyof T]: DeepReadonly11970<T[P]>;
};

type UnionToIntersection11970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11970<T> = UnionToIntersection11970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11970<T extends unknown[], V> = [...T, V];

type TuplifyUnion11970<T, L = LastOf11970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11970<TuplifyUnion11970<Exclude<T, L>>, L>;

type DeepPartial11970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11970<T[P]> }
  : T;

type Paths11970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11970<K, Paths11970<T[K], Prev11970[D]>> : never }[keyof T]
  : never;

type Prev11970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11970 {
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

type ConfigPaths11970 = Paths11970<NestedConfig11970>;

interface HeavyProps11970 {
  config: DeepPartial11970<NestedConfig11970>;
  path?: ConfigPaths11970;
}

const HeavyComponent11970 = memo(function HeavyComponent11970({ config }: HeavyProps11970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11970.displayName = 'HeavyComponent11970';
export default HeavyComponent11970;
