'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11862<T> = T extends (infer U)[]
  ? DeepReadonlyArray11862<U>
  : T extends object
  ? DeepReadonlyObject11862<T>
  : T;

interface DeepReadonlyArray11862<T> extends ReadonlyArray<DeepReadonly11862<T>> {}

type DeepReadonlyObject11862<T> = {
  readonly [P in keyof T]: DeepReadonly11862<T[P]>;
};

type UnionToIntersection11862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11862<T> = UnionToIntersection11862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11862<T extends unknown[], V> = [...T, V];

type TuplifyUnion11862<T, L = LastOf11862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11862<TuplifyUnion11862<Exclude<T, L>>, L>;

type DeepPartial11862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11862<T[P]> }
  : T;

type Paths11862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11862<K, Paths11862<T[K], Prev11862[D]>> : never }[keyof T]
  : never;

type Prev11862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11862 {
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

type ConfigPaths11862 = Paths11862<NestedConfig11862>;

interface HeavyProps11862 {
  config: DeepPartial11862<NestedConfig11862>;
  path?: ConfigPaths11862;
}

const HeavyComponent11862 = memo(function HeavyComponent11862({ config }: HeavyProps11862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11862.displayName = 'HeavyComponent11862';
export default HeavyComponent11862;
