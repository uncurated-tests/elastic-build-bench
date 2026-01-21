'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11785<T> = T extends (infer U)[]
  ? DeepReadonlyArray11785<U>
  : T extends object
  ? DeepReadonlyObject11785<T>
  : T;

interface DeepReadonlyArray11785<T> extends ReadonlyArray<DeepReadonly11785<T>> {}

type DeepReadonlyObject11785<T> = {
  readonly [P in keyof T]: DeepReadonly11785<T[P]>;
};

type UnionToIntersection11785<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11785<T> = UnionToIntersection11785<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11785<T extends unknown[], V> = [...T, V];

type TuplifyUnion11785<T, L = LastOf11785<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11785<TuplifyUnion11785<Exclude<T, L>>, L>;

type DeepPartial11785<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11785<T[P]> }
  : T;

type Paths11785<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11785<K, Paths11785<T[K], Prev11785[D]>> : never }[keyof T]
  : never;

type Prev11785 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11785<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11785 {
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

type ConfigPaths11785 = Paths11785<NestedConfig11785>;

interface HeavyProps11785 {
  config: DeepPartial11785<NestedConfig11785>;
  path?: ConfigPaths11785;
}

const HeavyComponent11785 = memo(function HeavyComponent11785({ config }: HeavyProps11785) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11785) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11785 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11785: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11785.displayName = 'HeavyComponent11785';
export default HeavyComponent11785;
