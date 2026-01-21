'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly501<T> = T extends (infer U)[]
  ? DeepReadonlyArray501<U>
  : T extends object
  ? DeepReadonlyObject501<T>
  : T;

interface DeepReadonlyArray501<T> extends ReadonlyArray<DeepReadonly501<T>> {}

type DeepReadonlyObject501<T> = {
  readonly [P in keyof T]: DeepReadonly501<T[P]>;
};

type UnionToIntersection501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf501<T> = UnionToIntersection501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push501<T extends unknown[], V> = [...T, V];

type TuplifyUnion501<T, L = LastOf501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push501<TuplifyUnion501<Exclude<T, L>>, L>;

type DeepPartial501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial501<T[P]> }
  : T;

type Paths501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join501<K, Paths501<T[K], Prev501[D]>> : never }[keyof T]
  : never;

type Prev501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig501 {
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

type ConfigPaths501 = Paths501<NestedConfig501>;

interface HeavyProps501 {
  config: DeepPartial501<NestedConfig501>;
  path?: ConfigPaths501;
}

const HeavyComponent501 = memo(function HeavyComponent501({ config }: HeavyProps501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent501.displayName = 'HeavyComponent501';
export default HeavyComponent501;
