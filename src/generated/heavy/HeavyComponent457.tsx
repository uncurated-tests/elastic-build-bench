'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly457<T> = T extends (infer U)[]
  ? DeepReadonlyArray457<U>
  : T extends object
  ? DeepReadonlyObject457<T>
  : T;

interface DeepReadonlyArray457<T> extends ReadonlyArray<DeepReadonly457<T>> {}

type DeepReadonlyObject457<T> = {
  readonly [P in keyof T]: DeepReadonly457<T[P]>;
};

type UnionToIntersection457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf457<T> = UnionToIntersection457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push457<T extends unknown[], V> = [...T, V];

type TuplifyUnion457<T, L = LastOf457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push457<TuplifyUnion457<Exclude<T, L>>, L>;

type DeepPartial457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial457<T[P]> }
  : T;

type Paths457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join457<K, Paths457<T[K], Prev457[D]>> : never }[keyof T]
  : never;

type Prev457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig457 {
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

type ConfigPaths457 = Paths457<NestedConfig457>;

interface HeavyProps457 {
  config: DeepPartial457<NestedConfig457>;
  path?: ConfigPaths457;
}

const HeavyComponent457 = memo(function HeavyComponent457({ config }: HeavyProps457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent457.displayName = 'HeavyComponent457';
export default HeavyComponent457;
