'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11781<T> = T extends (infer U)[]
  ? DeepReadonlyArray11781<U>
  : T extends object
  ? DeepReadonlyObject11781<T>
  : T;

interface DeepReadonlyArray11781<T> extends ReadonlyArray<DeepReadonly11781<T>> {}

type DeepReadonlyObject11781<T> = {
  readonly [P in keyof T]: DeepReadonly11781<T[P]>;
};

type UnionToIntersection11781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11781<T> = UnionToIntersection11781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11781<T extends unknown[], V> = [...T, V];

type TuplifyUnion11781<T, L = LastOf11781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11781<TuplifyUnion11781<Exclude<T, L>>, L>;

type DeepPartial11781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11781<T[P]> }
  : T;

type Paths11781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11781<K, Paths11781<T[K], Prev11781[D]>> : never }[keyof T]
  : never;

type Prev11781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11781 {
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

type ConfigPaths11781 = Paths11781<NestedConfig11781>;

interface HeavyProps11781 {
  config: DeepPartial11781<NestedConfig11781>;
  path?: ConfigPaths11781;
}

const HeavyComponent11781 = memo(function HeavyComponent11781({ config }: HeavyProps11781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11781.displayName = 'HeavyComponent11781';
export default HeavyComponent11781;
