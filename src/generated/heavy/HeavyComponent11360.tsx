'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11360<T> = T extends (infer U)[]
  ? DeepReadonlyArray11360<U>
  : T extends object
  ? DeepReadonlyObject11360<T>
  : T;

interface DeepReadonlyArray11360<T> extends ReadonlyArray<DeepReadonly11360<T>> {}

type DeepReadonlyObject11360<T> = {
  readonly [P in keyof T]: DeepReadonly11360<T[P]>;
};

type UnionToIntersection11360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11360<T> = UnionToIntersection11360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11360<T extends unknown[], V> = [...T, V];

type TuplifyUnion11360<T, L = LastOf11360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11360<TuplifyUnion11360<Exclude<T, L>>, L>;

type DeepPartial11360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11360<T[P]> }
  : T;

type Paths11360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11360<K, Paths11360<T[K], Prev11360[D]>> : never }[keyof T]
  : never;

type Prev11360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11360 {
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

type ConfigPaths11360 = Paths11360<NestedConfig11360>;

interface HeavyProps11360 {
  config: DeepPartial11360<NestedConfig11360>;
  path?: ConfigPaths11360;
}

const HeavyComponent11360 = memo(function HeavyComponent11360({ config }: HeavyProps11360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11360.displayName = 'HeavyComponent11360';
export default HeavyComponent11360;
