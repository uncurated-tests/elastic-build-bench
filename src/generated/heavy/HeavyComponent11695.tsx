'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11695<T> = T extends (infer U)[]
  ? DeepReadonlyArray11695<U>
  : T extends object
  ? DeepReadonlyObject11695<T>
  : T;

interface DeepReadonlyArray11695<T> extends ReadonlyArray<DeepReadonly11695<T>> {}

type DeepReadonlyObject11695<T> = {
  readonly [P in keyof T]: DeepReadonly11695<T[P]>;
};

type UnionToIntersection11695<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11695<T> = UnionToIntersection11695<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11695<T extends unknown[], V> = [...T, V];

type TuplifyUnion11695<T, L = LastOf11695<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11695<TuplifyUnion11695<Exclude<T, L>>, L>;

type DeepPartial11695<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11695<T[P]> }
  : T;

type Paths11695<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11695<K, Paths11695<T[K], Prev11695[D]>> : never }[keyof T]
  : never;

type Prev11695 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11695<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11695 {
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

type ConfigPaths11695 = Paths11695<NestedConfig11695>;

interface HeavyProps11695 {
  config: DeepPartial11695<NestedConfig11695>;
  path?: ConfigPaths11695;
}

const HeavyComponent11695 = memo(function HeavyComponent11695({ config }: HeavyProps11695) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11695) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11695 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11695: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11695.displayName = 'HeavyComponent11695';
export default HeavyComponent11695;
