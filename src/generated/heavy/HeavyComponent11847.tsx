'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11847<T> = T extends (infer U)[]
  ? DeepReadonlyArray11847<U>
  : T extends object
  ? DeepReadonlyObject11847<T>
  : T;

interface DeepReadonlyArray11847<T> extends ReadonlyArray<DeepReadonly11847<T>> {}

type DeepReadonlyObject11847<T> = {
  readonly [P in keyof T]: DeepReadonly11847<T[P]>;
};

type UnionToIntersection11847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11847<T> = UnionToIntersection11847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11847<T extends unknown[], V> = [...T, V];

type TuplifyUnion11847<T, L = LastOf11847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11847<TuplifyUnion11847<Exclude<T, L>>, L>;

type DeepPartial11847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11847<T[P]> }
  : T;

type Paths11847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11847<K, Paths11847<T[K], Prev11847[D]>> : never }[keyof T]
  : never;

type Prev11847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11847 {
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

type ConfigPaths11847 = Paths11847<NestedConfig11847>;

interface HeavyProps11847 {
  config: DeepPartial11847<NestedConfig11847>;
  path?: ConfigPaths11847;
}

const HeavyComponent11847 = memo(function HeavyComponent11847({ config }: HeavyProps11847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11847.displayName = 'HeavyComponent11847';
export default HeavyComponent11847;
