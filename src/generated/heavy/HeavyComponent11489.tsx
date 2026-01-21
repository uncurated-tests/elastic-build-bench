'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11489<T> = T extends (infer U)[]
  ? DeepReadonlyArray11489<U>
  : T extends object
  ? DeepReadonlyObject11489<T>
  : T;

interface DeepReadonlyArray11489<T> extends ReadonlyArray<DeepReadonly11489<T>> {}

type DeepReadonlyObject11489<T> = {
  readonly [P in keyof T]: DeepReadonly11489<T[P]>;
};

type UnionToIntersection11489<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11489<T> = UnionToIntersection11489<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11489<T extends unknown[], V> = [...T, V];

type TuplifyUnion11489<T, L = LastOf11489<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11489<TuplifyUnion11489<Exclude<T, L>>, L>;

type DeepPartial11489<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11489<T[P]> }
  : T;

type Paths11489<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11489<K, Paths11489<T[K], Prev11489[D]>> : never }[keyof T]
  : never;

type Prev11489 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11489<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11489 {
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

type ConfigPaths11489 = Paths11489<NestedConfig11489>;

interface HeavyProps11489 {
  config: DeepPartial11489<NestedConfig11489>;
  path?: ConfigPaths11489;
}

const HeavyComponent11489 = memo(function HeavyComponent11489({ config }: HeavyProps11489) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11489) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11489 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11489: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11489.displayName = 'HeavyComponent11489';
export default HeavyComponent11489;
