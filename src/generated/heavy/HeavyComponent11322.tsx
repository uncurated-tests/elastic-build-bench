'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11322<T> = T extends (infer U)[]
  ? DeepReadonlyArray11322<U>
  : T extends object
  ? DeepReadonlyObject11322<T>
  : T;

interface DeepReadonlyArray11322<T> extends ReadonlyArray<DeepReadonly11322<T>> {}

type DeepReadonlyObject11322<T> = {
  readonly [P in keyof T]: DeepReadonly11322<T[P]>;
};

type UnionToIntersection11322<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11322<T> = UnionToIntersection11322<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11322<T extends unknown[], V> = [...T, V];

type TuplifyUnion11322<T, L = LastOf11322<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11322<TuplifyUnion11322<Exclude<T, L>>, L>;

type DeepPartial11322<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11322<T[P]> }
  : T;

type Paths11322<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11322<K, Paths11322<T[K], Prev11322[D]>> : never }[keyof T]
  : never;

type Prev11322 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11322<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11322 {
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

type ConfigPaths11322 = Paths11322<NestedConfig11322>;

interface HeavyProps11322 {
  config: DeepPartial11322<NestedConfig11322>;
  path?: ConfigPaths11322;
}

const HeavyComponent11322 = memo(function HeavyComponent11322({ config }: HeavyProps11322) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11322) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11322 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11322: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11322.displayName = 'HeavyComponent11322';
export default HeavyComponent11322;
