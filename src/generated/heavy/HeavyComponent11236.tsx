'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11236<T> = T extends (infer U)[]
  ? DeepReadonlyArray11236<U>
  : T extends object
  ? DeepReadonlyObject11236<T>
  : T;

interface DeepReadonlyArray11236<T> extends ReadonlyArray<DeepReadonly11236<T>> {}

type DeepReadonlyObject11236<T> = {
  readonly [P in keyof T]: DeepReadonly11236<T[P]>;
};

type UnionToIntersection11236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11236<T> = UnionToIntersection11236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11236<T extends unknown[], V> = [...T, V];

type TuplifyUnion11236<T, L = LastOf11236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11236<TuplifyUnion11236<Exclude<T, L>>, L>;

type DeepPartial11236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11236<T[P]> }
  : T;

type Paths11236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11236<K, Paths11236<T[K], Prev11236[D]>> : never }[keyof T]
  : never;

type Prev11236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11236 {
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

type ConfigPaths11236 = Paths11236<NestedConfig11236>;

interface HeavyProps11236 {
  config: DeepPartial11236<NestedConfig11236>;
  path?: ConfigPaths11236;
}

const HeavyComponent11236 = memo(function HeavyComponent11236({ config }: HeavyProps11236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11236.displayName = 'HeavyComponent11236';
export default HeavyComponent11236;
