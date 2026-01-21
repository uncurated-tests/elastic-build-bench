'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11260<T> = T extends (infer U)[]
  ? DeepReadonlyArray11260<U>
  : T extends object
  ? DeepReadonlyObject11260<T>
  : T;

interface DeepReadonlyArray11260<T> extends ReadonlyArray<DeepReadonly11260<T>> {}

type DeepReadonlyObject11260<T> = {
  readonly [P in keyof T]: DeepReadonly11260<T[P]>;
};

type UnionToIntersection11260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11260<T> = UnionToIntersection11260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11260<T extends unknown[], V> = [...T, V];

type TuplifyUnion11260<T, L = LastOf11260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11260<TuplifyUnion11260<Exclude<T, L>>, L>;

type DeepPartial11260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11260<T[P]> }
  : T;

type Paths11260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11260<K, Paths11260<T[K], Prev11260[D]>> : never }[keyof T]
  : never;

type Prev11260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11260 {
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

type ConfigPaths11260 = Paths11260<NestedConfig11260>;

interface HeavyProps11260 {
  config: DeepPartial11260<NestedConfig11260>;
  path?: ConfigPaths11260;
}

const HeavyComponent11260 = memo(function HeavyComponent11260({ config }: HeavyProps11260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11260.displayName = 'HeavyComponent11260';
export default HeavyComponent11260;
