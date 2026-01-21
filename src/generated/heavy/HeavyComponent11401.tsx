'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11401<T> = T extends (infer U)[]
  ? DeepReadonlyArray11401<U>
  : T extends object
  ? DeepReadonlyObject11401<T>
  : T;

interface DeepReadonlyArray11401<T> extends ReadonlyArray<DeepReadonly11401<T>> {}

type DeepReadonlyObject11401<T> = {
  readonly [P in keyof T]: DeepReadonly11401<T[P]>;
};

type UnionToIntersection11401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11401<T> = UnionToIntersection11401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11401<T extends unknown[], V> = [...T, V];

type TuplifyUnion11401<T, L = LastOf11401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11401<TuplifyUnion11401<Exclude<T, L>>, L>;

type DeepPartial11401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11401<T[P]> }
  : T;

type Paths11401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11401<K, Paths11401<T[K], Prev11401[D]>> : never }[keyof T]
  : never;

type Prev11401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11401 {
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

type ConfigPaths11401 = Paths11401<NestedConfig11401>;

interface HeavyProps11401 {
  config: DeepPartial11401<NestedConfig11401>;
  path?: ConfigPaths11401;
}

const HeavyComponent11401 = memo(function HeavyComponent11401({ config }: HeavyProps11401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11401.displayName = 'HeavyComponent11401';
export default HeavyComponent11401;
