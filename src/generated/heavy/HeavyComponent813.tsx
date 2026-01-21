'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly813<T> = T extends (infer U)[]
  ? DeepReadonlyArray813<U>
  : T extends object
  ? DeepReadonlyObject813<T>
  : T;

interface DeepReadonlyArray813<T> extends ReadonlyArray<DeepReadonly813<T>> {}

type DeepReadonlyObject813<T> = {
  readonly [P in keyof T]: DeepReadonly813<T[P]>;
};

type UnionToIntersection813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf813<T> = UnionToIntersection813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push813<T extends unknown[], V> = [...T, V];

type TuplifyUnion813<T, L = LastOf813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push813<TuplifyUnion813<Exclude<T, L>>, L>;

type DeepPartial813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial813<T[P]> }
  : T;

type Paths813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join813<K, Paths813<T[K], Prev813[D]>> : never }[keyof T]
  : never;

type Prev813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig813 {
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

type ConfigPaths813 = Paths813<NestedConfig813>;

interface HeavyProps813 {
  config: DeepPartial813<NestedConfig813>;
  path?: ConfigPaths813;
}

const HeavyComponent813 = memo(function HeavyComponent813({ config }: HeavyProps813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent813.displayName = 'HeavyComponent813';
export default HeavyComponent813;
