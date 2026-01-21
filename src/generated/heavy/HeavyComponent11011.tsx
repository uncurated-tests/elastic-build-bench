'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11011<T> = T extends (infer U)[]
  ? DeepReadonlyArray11011<U>
  : T extends object
  ? DeepReadonlyObject11011<T>
  : T;

interface DeepReadonlyArray11011<T> extends ReadonlyArray<DeepReadonly11011<T>> {}

type DeepReadonlyObject11011<T> = {
  readonly [P in keyof T]: DeepReadonly11011<T[P]>;
};

type UnionToIntersection11011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11011<T> = UnionToIntersection11011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11011<T extends unknown[], V> = [...T, V];

type TuplifyUnion11011<T, L = LastOf11011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11011<TuplifyUnion11011<Exclude<T, L>>, L>;

type DeepPartial11011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11011<T[P]> }
  : T;

type Paths11011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11011<K, Paths11011<T[K], Prev11011[D]>> : never }[keyof T]
  : never;

type Prev11011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11011 {
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

type ConfigPaths11011 = Paths11011<NestedConfig11011>;

interface HeavyProps11011 {
  config: DeepPartial11011<NestedConfig11011>;
  path?: ConfigPaths11011;
}

const HeavyComponent11011 = memo(function HeavyComponent11011({ config }: HeavyProps11011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11011.displayName = 'HeavyComponent11011';
export default HeavyComponent11011;
