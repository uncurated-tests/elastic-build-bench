'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11253<T> = T extends (infer U)[]
  ? DeepReadonlyArray11253<U>
  : T extends object
  ? DeepReadonlyObject11253<T>
  : T;

interface DeepReadonlyArray11253<T> extends ReadonlyArray<DeepReadonly11253<T>> {}

type DeepReadonlyObject11253<T> = {
  readonly [P in keyof T]: DeepReadonly11253<T[P]>;
};

type UnionToIntersection11253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11253<T> = UnionToIntersection11253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11253<T extends unknown[], V> = [...T, V];

type TuplifyUnion11253<T, L = LastOf11253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11253<TuplifyUnion11253<Exclude<T, L>>, L>;

type DeepPartial11253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11253<T[P]> }
  : T;

type Paths11253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11253<K, Paths11253<T[K], Prev11253[D]>> : never }[keyof T]
  : never;

type Prev11253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11253 {
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

type ConfigPaths11253 = Paths11253<NestedConfig11253>;

interface HeavyProps11253 {
  config: DeepPartial11253<NestedConfig11253>;
  path?: ConfigPaths11253;
}

const HeavyComponent11253 = memo(function HeavyComponent11253({ config }: HeavyProps11253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11253.displayName = 'HeavyComponent11253';
export default HeavyComponent11253;
