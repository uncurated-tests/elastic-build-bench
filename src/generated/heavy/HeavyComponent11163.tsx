'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11163<T> = T extends (infer U)[]
  ? DeepReadonlyArray11163<U>
  : T extends object
  ? DeepReadonlyObject11163<T>
  : T;

interface DeepReadonlyArray11163<T> extends ReadonlyArray<DeepReadonly11163<T>> {}

type DeepReadonlyObject11163<T> = {
  readonly [P in keyof T]: DeepReadonly11163<T[P]>;
};

type UnionToIntersection11163<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11163<T> = UnionToIntersection11163<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11163<T extends unknown[], V> = [...T, V];

type TuplifyUnion11163<T, L = LastOf11163<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11163<TuplifyUnion11163<Exclude<T, L>>, L>;

type DeepPartial11163<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11163<T[P]> }
  : T;

type Paths11163<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11163<K, Paths11163<T[K], Prev11163[D]>> : never }[keyof T]
  : never;

type Prev11163 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11163<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11163 {
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

type ConfigPaths11163 = Paths11163<NestedConfig11163>;

interface HeavyProps11163 {
  config: DeepPartial11163<NestedConfig11163>;
  path?: ConfigPaths11163;
}

const HeavyComponent11163 = memo(function HeavyComponent11163({ config }: HeavyProps11163) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11163) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11163 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11163: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11163.displayName = 'HeavyComponent11163';
export default HeavyComponent11163;
